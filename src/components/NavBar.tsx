interface NavBarProps {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: NavBarProps) => {
  return <div>NarBar: {cartItemsCount}</div>;
};

export default NavBar;
