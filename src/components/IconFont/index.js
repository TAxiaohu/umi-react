import { Icon } from 'antd';
import defaultSettings from '@/common/defaultSettings';

const { iconfontUrl } = defaultSettings;

// 使用：
// import IconFont from '@/components/IconFont';
// <IconFont type='icon-demo' className='xxx-xxx' />
export default Icon.createFromIconfontCN({ iconfontUrl });