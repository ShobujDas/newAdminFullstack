import { Routes, Route } from "react-router-dom";
import "./style/style.css";

import HomePage from "./pages/HomePage";

import Layout from "./component/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Auth/Login';
import AddLogo from './component/themeSettings/AddLogo';
import ManageLogo from './component/themeSettings/ManageLogo';
import AddBanner from './component/themeSettings/AddBanner';
import ManageBanner from './component/themeSettings/ManageBanner';
import AddUser from "./component/settings/AddUser";
import ManageUser from './component/settings/ManageUser';
import AddInfromation from "./component/Agent/AddInfromation";
import InformationList from "./component/Agent/InformationList";
import SendPoints from "./component/Agent/SendPoints";
import PointList from "./component/Agent/PointList";
import AgenstAmount from './component/agentReports/AgenstAmount';
import AgentToMemberTransfer from './component/agentReports/AgentToMemberTransfer';
import MembertoToAgentTrans from './component/agentReports/MembertoToAgentTrans';
import AgentWithdrawAmoount from './component/agentReports/AgentWithdrawAmoount';
import PinInfo from "./component/pinInformation/PinInfo";
import PinInfoList from "./component/pinInformation/PinInfoList";
import MemLebInfo from './component/softwareReport/MemLebInfo';
import MemInfo from './component/softwareReport/MemInfo';
import MemRefRank from './component/softwareReport/MemRefRank';
import WithDrawRank from './component/softwareReport/WithDrawRank';
import WithDrawRefComInfo from './component/softwareReport/WithDrawRefComInfo';
import Rewards from './component/softwareReport/Rewards';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/add_logo" element={<AddLogo />} />
        <Route path="/manage_logo" element={<ManageLogo />} />
        <Route path="/add_top_banner" element={<AddBanner />} />
        <Route path="/manage_top_banner" element={<ManageBanner />} />

        <Route path="/add_user" element={<AddUser />} />
        <Route path="/manage_user" element={<ManageUser />} />

        <Route path="/add_agent_information" element={<AddInfromation />} />
        <Route path="/agent_information_list" element={<InformationList />} />
        <Route path="/send_agent_points" element={<SendPoints />} />
        <Route path="/agent_points_list" element={<PointList />} />

        <Route path="/agent_amount_report" element={<AgenstAmount />} />
        <Route path="/agent_to_member_transfer_amount_report" element={<AgentToMemberTransfer />} />
        <Route path="/member_to_agnet_trnasfer_amount" element={<MembertoToAgentTrans />} />
        <Route path="/agent_withdraw_amount_report" element={<AgentWithdrawAmoount />} />

        <Route path="/pin_infromation" element={<PinInfo />} />
        <Route path="/pin_infromtion_list" element={<PinInfoList />} />


        <Route path="/member_label_information" element={<MemLebInfo />} />
        <Route path="/member_information" element={<MemInfo />} />
        <Route path="/member_referral" element={<MemRefRank />} />
        <Route path="/withdraw_rank_information" element={<WithDrawRank />} />
        <Route path="/withdraw_referral" element={<WithDrawRefComInfo />} />

        <Route path="/rewards" element={<Rewards />} />

      
      </Routes>
    </>
  );
}

export default App;
