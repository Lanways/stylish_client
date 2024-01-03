//types
import { Category, Product } from '../../types/type';
import './SideMenu.scss';

interface SideMenuProps {
  setMenuId: (id: number) => void;
  categoryAll: Category;
  products: Product[];
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
  return (
    <div className='side-menu'>
      <h3 className='bold-16'>商品分類</h3>
      <ul>
        {props?.categoryAll?.map?.((type) => {
          return (
            <li
              className='regular-14'
              key={`${type.id}`}
              onClick={() => {
                props?.setMenuId(type.id);
              }}
            >
              <span>{type.name}</span>
              <span>{`${
                props?.products?.filter((item) => item.categoryId === type.id)
                  .length
              }`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
