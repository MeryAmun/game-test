import { Home,Folder,Settings,MessageSquare,Server} from 'react-feather';
import { VscFlame } from 'react-icons/vsc'
import { LuStars } from 'react-icons/lu'
import { BsArrowRepeat} from 'react-icons/bs'
import { FaRandom,FaCarSide} from 'react-icons/fa'
import { HiOutlineUsers} from 'react-icons/hi'
import { GiMineExplosion} from 'react-icons/gi'
import { TbCompass} from 'react-icons/tb'
import { RiBasketballFill} from 'react-icons/ri'
import  { PiFlowerTulip } from 'react-icons/pi'
import  { IoIosBicycle } from 'react-icons/io'


export const sidebarRecent = [
    {
        icon:LuStars,title:'New',link:'/new',id:1001
    },
    {
        icon:VscFlame,title:'Trending',link:'/trending',id:1002
    },
    {
        icon:BsArrowRepeat,title:'Repeat',link:'/repeat',id:1003
    },
    {
        icon:FaRandom,title:'Random',link:'/random',id:1004
    },
]
export const sideBarData = [
    {
        icon: HiOutlineUsers,title:'Two Players',link:'/',id:3
    },
    
    {
        icon:GiMineExplosion,title:'Action',link:'/action',id:4
    },
    {
        icon:TbCompass,title:'Adventure',link:'/',id:5
    },
    {
        icon:RiBasketballFill,title:'Basketball',link:'/',id:6
    },
    {
        icon:PiFlowerTulip,title:'Beauty',link:'/',id:7
    },
    {
        icon:IoIosBicycle,title:'Bike',link:'/',id:8
    },
    {
        icon:FaCarSide,title:'Car',link:'/',id:9
    },
    {
        icon:Folder,title:'Knowledge',link:'/',id:9
    },
    {
        icon:Folder,title:'Knowledge',link:'/',id:9
    },
    {
        icon:Folder,title:'Knowledge',link:'/',id:9
    },
]
export const navBarData = [
    {
        icon:Home,title:'Home',link:'/', id:1
    },
    {
        icon:Server,title:'Status',link:'/', id:2
    },
    {
        icon:MessageSquare,title:'Support',link:'/', id:3
    },
    {
        icon:Settings,title:'Dashboard',link:'/', id:4
    },
    
]