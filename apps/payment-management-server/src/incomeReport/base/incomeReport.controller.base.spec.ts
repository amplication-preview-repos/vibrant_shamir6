import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { IncomeReportController } from "../incomeReport.controller";
import { IncomeReportService } from "../incomeReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  artistProfile: "exampleArtistProfile",
  commissionPaid: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  month: new Date(),
  totalIncome: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  artistProfile: "exampleArtistProfile",
  commissionPaid: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  month: new Date(),
  totalIncome: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    artistProfile: "exampleArtistProfile",
    commissionPaid: 42.42,
    createdAt: new Date(),
    id: "exampleId",
    month: new Date(),
    totalIncome: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  artistProfile: "exampleArtistProfile",
  commissionPaid: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  month: new Date(),
  totalIncome: 42.42,
  updatedAt: new Date(),
};

const service = {
  createIncomeReport() {
    return CREATE_RESULT;
  },
  incomeReports: () => FIND_MANY_RESULT,
  incomeReport: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("IncomeReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IncomeReportService,
          useValue: service,
        },
      ],
      controllers: [IncomeReportController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /incomeReports", async () => {
    await request(app.getHttpServer())
      .post("/incomeReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        month: CREATE_RESULT.month.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /incomeReports", async () => {
    await request(app.getHttpServer())
      .get("/incomeReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          month: FIND_MANY_RESULT[0].month.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /incomeReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/incomeReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /incomeReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/incomeReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        month: FIND_ONE_RESULT.month.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /incomeReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/incomeReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        month: CREATE_RESULT.month.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/incomeReports")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
