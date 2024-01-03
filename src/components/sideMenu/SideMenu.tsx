import './SideMenu.scss';

const sideMenuItem: { title: string; quantity: string }[] = [
  {
    title: '所有商品',
    quantity: '1',
  },
  {
    title: '本月新品',
    quantity: '2',
  },
  {
    title: '本月新品',
    quantity: '3',
  },
  {
    title: '夏日渡假風',
    quantity: '4',
  },
  {
    title: '熱銷商品',
    quantity: '5',
  },
  {
    title: '現貨商品區',
    quantity: '6',
  },
  {
    title: '鞋子配件等',
    quantity: '7',
  },
  {
    title: '限時優惠',
    quantity: '8',
  },
];

const SideMenu: React.FC = () => {
  return (
    <div className='side-menu'>
      <h3 className='bold-16'>商品分類</h3>
      <ul>
        {sideMenuItem.map((item, i) => {
          return (
            <li className='regular-14' key={`side-menu-title-${i}`}>
              <span>{item.title}</span>
              <span>{item.quantity}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
