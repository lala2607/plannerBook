import { IAppState } from '../../App';
import React from 'react';;



interface WishlistProps {
  wishlistItems: IAppState['wishlistItems'];
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

const Wishlist: React.FC<WishlistProps> = ({wishlistItems, setAppState}) => {

  const handleAddWishlistItem = () => {
    setAppState((prevState) => ({...prevState,wishlistItems: [...prevState.wishlistItems,{ checked: false, value: '' },],}));
  };

  const handleUpdateWishlistItem = (
    index: number,
    checked: boolean,
    value: string
  ) => {
    setAppState((prevState) => ({
      ...prevState,
      wishlistItems: prevState.wishlistItems.map((item, i) =>
        i === index ? { ...item, checked, value } : item
      ),
    }));
  };

  const handleRemoveWishlistItem = (index: number) => {
    setAppState((prevState) => ({
      ...prevState,
      wishlistItems: prevState.wishlistItems.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className='Wishlist'>
      <h1 className='word-wishlist'> Wishlist </h1>
      <button className='button-newWishlist' onClick={handleAddWishlistItem}>New Wish</button>
      {wishlistItems.map((item, index) => (
        <div key={index}>
          <input
          className='checkbox-wishlist'
            type="checkbox"
            checked={item.checked}
            onChange={(e) =>
              handleUpdateWishlistItem(
                index,
                e.target.checked,
                item.value
              )
            }
          />
          <label>
          <input
            id='input-wishlist'
            type="text"
            value={item.value}
            onChange={(e) =>
              handleUpdateWishlistItem(index, item.checked, e.target.value)
            }
          />
          </label>
          
          <button className='Wish-delete' onClick={() => handleRemoveWishlistItem(index)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
