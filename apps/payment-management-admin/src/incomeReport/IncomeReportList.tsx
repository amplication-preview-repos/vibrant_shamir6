import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IncomeReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IncomeReports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ArtistProfile" source="artistProfile" />
        <TextField label="commissionPaid" source="commissionPaid" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="month" source="month" />
        <TextField label="totalIncome" source="totalIncome" />
        <TextField label="transactions" source="transactions" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
