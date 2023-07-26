import { Home,Settings,MessageSquare,Server} from 'react-feather';
import { VscFlame } from 'react-icons/vsc'
import { LuStars,LuMousePointerClick } from 'react-icons/lu'
import { BsArrowRepeat,BsController,BsDoorOpen} from 'react-icons/bs'
import { FaRandom,FaCarSide} from 'react-icons/fa'
import { HiOutlineUsers} from 'react-icons/hi'
import { GiMineExplosion} from 'react-icons/gi'
import { TbCompass} from 'react-icons/tb'
import { RiBasketballFill,RiSteering2Line} from 'react-icons/ri'
import  { PiFlowerTulip,PiDress } from 'react-icons/pi'
import  { IoIosBicycle } from 'react-icons/io'
import  { TbPlayCard } from 'react-icons/tb'


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
        icon:TbPlayCard,title:'Card',link:'/',id:10
    },
    {
        icon:LuMousePointerClick,title:'Clicker',link:'/',id:10
    },
    {
        icon:BsController,title:'Controller',link:'/',id:12
    },
    {
        icon:PiDress,title:'Dress Up',link:'/',id:13
    },
    {
        icon:RiSteering2Line,title:'Driving',link:'/',id:14
    },
    {
        icon:BsDoorOpen,title:'Escape',link:'/',id:15
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