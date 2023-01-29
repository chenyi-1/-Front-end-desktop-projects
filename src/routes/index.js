//劳保类
import Labor from "../pages/Labor";
//办公类
import Office from '../pages/Office';
//油脂类
import Grease from '../pages/Grease';
//机械类
import Machine from '../pages/Machine';
//电气类
import Electric from '../pages/Electric';
//耗材
import Supplies from '../pages/Supplies';
//工具
import Tool from '../pages/Tool';
//品类入库查询
import Other from '../pages/Other';
import Home from "../components/Home"
import Addto from "../components/Addto";
const routes = [
    {
        path:  `/labor`,
        component: Labor,
        title: "劳保类",
    },
    {
        path:"/office",
        component: Office,
        title: "办公类",
    },
    {
        path:"/grease",
        component: Grease,
        title: "油脂类",
    },
    {
        path:"/machine",
        component: Machine,
        title: "机械类",
    },
    {
        path:"/electric",
        component: Electric,
        title:"电气类",
    },
    {
        path:"/Supplies",
        component: Supplies,
        title: "耗材",
    },
    {
        path:"/tool",
        component: Tool,
        title: "工具",
    },
    {
        path:"/other",
        component: Other,
        title: "其他",
    },
    {
        path:"/addto",
        component: Addto,
        title:"添加"
    }
];

export default routes