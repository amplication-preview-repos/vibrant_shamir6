import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InviteCodeList } from "./inviteCode/InviteCodeList";
import { InviteCodeCreate } from "./inviteCode/InviteCodeCreate";
import { InviteCodeEdit } from "./inviteCode/InviteCodeEdit";
import { InviteCodeShow } from "./inviteCode/InviteCodeShow";
import { ArtistProfileList } from "./artistProfile/ArtistProfileList";
import { ArtistProfileCreate } from "./artistProfile/ArtistProfileCreate";
import { ArtistProfileEdit } from "./artistProfile/ArtistProfileEdit";
import { ArtistProfileShow } from "./artistProfile/ArtistProfileShow";
import { ClientProfileList } from "./clientProfile/ClientProfileList";
import { ClientProfileCreate } from "./clientProfile/ClientProfileCreate";
import { ClientProfileEdit } from "./clientProfile/ClientProfileEdit";
import { ClientProfileShow } from "./clientProfile/ClientProfileShow";
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
        title={"User Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InviteCode"
          list={InviteCodeList}
          edit={InviteCodeEdit}
          create={InviteCodeCreate}
          show={InviteCodeShow}
        />
        <Resource
          name="ArtistProfile"
          list={ArtistProfileList}
          edit={ArtistProfileEdit}
          create={ArtistProfileCreate}
          show={ArtistProfileShow}
        />
        <Resource
          name="ClientProfile"
          list={ClientProfileList}
          edit={ClientProfileEdit}
          create={ClientProfileCreate}
          show={ClientProfileShow}
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
