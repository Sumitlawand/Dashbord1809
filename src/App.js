import './App.css';
import {Space} from "antd";
import AppFooter from "./Components/AppFooter/Index";
import AppHeader from "./Components/AppHeader/Index";
import MenuSide from "./Components/SideMenu/Index";
import PageContent from "./Components/PageContent/Index"

//pages


function App() {
  return (
    <div className="App">
    <AppHeader /> 
     <Space className='SideMenuPageContent'>
     <MenuSide></MenuSide>
     <PageContent></PageContent>
     </Space>
     <AppFooter/>
    </div>
  );
}

export default App;
