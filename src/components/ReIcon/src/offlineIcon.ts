import { addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import HomeFilled from "@iconify-icons/ep/home-filled";
import InformationLine from "@iconify-icons/ri/information-line";
import Lollipop from "@iconify-icons/ep/lollipop";
import DataAnalysis from "@iconify-icons/ep/data-analysis";
import DataLine from "@iconify-icons/ep/data-line";
import User from "@iconify-icons/ep/user";
import UserFilled from "@iconify-icons/ep/user-filled";
import DownLoad from "@iconify-icons/ep/download";
import Document from "@iconify-icons/ep/document";
import FolderOpened from "@iconify-icons/ep/folder-opened";
import TwotoneShoppingCart from "@iconify-icons/ic/twotone-shopping-cart";
import SharpShoppingCart from "@iconify-icons/ic/sharp-shopping-cart";
import e911Emergency from "@iconify-icons/material-symbols/e911-emergency";
import Teeth from "@iconify-icons/icon-park-outline/teeth";

addIcon("homeFilled", HomeFilled);
addIcon("informationLine", InformationLine);
addIcon("lollipop", Lollipop);
addIcon("dataAnalysis", DataAnalysis);
addIcon("dataLine", DataLine);
addIcon("user", User);
addIcon("userFilled", UserFilled);
addIcon("downLoad", DownLoad);
addIcon("document", Document);
addIcon("folderOpened", FolderOpened);
addIcon("twoToneShoppingCart", TwotoneShoppingCart);
addIcon("sharpShoppingCart", SharpShoppingCart);
addIcon("e911Emergency", e911Emergency);
addIcon("teeth", Teeth);
