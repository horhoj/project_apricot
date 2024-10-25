import { InfoItem } from './Main.types';
import { getUUID } from '~/utils/getUUID';
import InfoCardIcon1 from '~/assets/info_card_icon_1.svg';
import InfoCardIcon2 from '~/assets/info_card_icon_2.svg';
import InfoCardIcon3 from '~/assets/info_card_icon_3.svg';

export const infoCardDataList: InfoItem[] = [
  { id: getUUID(), icon: InfoCardIcon1, value: '9 794', description: 'Subscriptions' },
  { id: getUUID(), icon: InfoCardIcon2, value: '721,8K', description: 'Subscribers' },
  { id: getUUID(), icon: InfoCardIcon3, value: '14,4M', description: 'Likes' },
];
