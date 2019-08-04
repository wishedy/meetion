import Home from '../components/Home';
import BaseInfoPage from '../components/BaseInfoPage';
import LinkPage from '../components/LinkPage';
import condition from '../components/personalCondition';
import EditPersonalCard from '../components/EditPersonalCard';
import WantSpeak from '../components/WantSpeak';
import FamilyCondition from '../components/FamilyCondition';
import EditLogo from '../components/EditLogo';
import Photo from '../components/PersonalPhoto';
export default {
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/link',
      name: 'link',
      component: LinkPage
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/logo',
      name: 'logo',
      component: EditLogo
    },
    {
      path: '/family',
      name: 'family',
      component: FamilyCondition
    },
    {
      path: '/speak',
      name: 'speak',
      component: WantSpeak
    },
    {
      path: '/card',
      name: 'card',
      component: EditPersonalCard
    },
    {
      path: '/condition',
      name: 'condition',
      component: condition
    },
    {
      path: '/base',
      name: 'base',
      component: BaseInfoPage
    }
  ]
};
