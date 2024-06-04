import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IncomeReportList } from "./incomeReport/IncomeReportList";
import { IncomeReportCreate } from "./incomeReport/IncomeReportCreate";
import { IncomeReportEdit } from "./incomeReport/IncomeReportEdit";
import { IncomeReportShow } from "./incomeReport/IncomeReportShow";
import { WithdrawalList } from "./withdrawal/WithdrawalList";
import { WithdrawalCreate } from "./withdrawal/WithdrawalCreate";
import { WithdrawalEdit } from "./withdrawal/WithdrawalEdit";
import { WithdrawalShow } from "./withdrawal/WithdrawalShow";
import { CommissionList } from "./commission/CommissionList";
import { CommissionCreate } from "./commission/CommissionCreate";
import { CommissionEdit } from "./commission/CommissionEdit";
import { CommissionShow } from "./commission/CommissionShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Payment Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="IncomeReport"
          list={IncomeReportList}
          edit={IncomeReportEdit}
          create={IncomeReportCreate}
          show={IncomeReportShow}
        />
        <Resource
          name="Withdrawal"
          list={WithdrawalList}
          edit={WithdrawalEdit}
          create={WithdrawalCreate}
          show={WithdrawalShow}
        />
        <Resource
          name="Commission"
          list={CommissionList}
          edit={CommissionEdit}
          create={CommissionCreate}
          show={CommissionShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
