import LogoBlack2 from "./LogoBlack2";
import StateDefaultWithIconFalse from "./StateDefaultWithIconFalse";
import TypeprimarySizenormalSta from "./TypeprimarySizenormalSta";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <LogoBlack2
        logoBlack2LogoBlack2="/logo--black-2.svg"
        logoBlack2Position="relative"
        logoBlack2FlexShrink="0"
      />
      <div className="hover-menu-parent">
        <StateDefaultWithIconFalse
          menu="Home"
          stateDefaultWithIconFalsePadding="var(--padding-3xs) var(--padding-5xl)"
          stateDefaultWithIconFalseBorderRadius="100px"
          stateDefaultWithIconFalseBackgroundColor="1.5px solid #19191c"
          menuFontWeight="500"
          menuFontFamily="Poppins"
          menuColor="#fff"
        />
        <StateDefaultWithIconFalse
          menu="Features"
          stateDefaultWithIconFalsePadding="var(--padding-3xs) var(--padding-5xl)"
          stateDefaultWithIconFalseBorderRadius="unset"
          stateDefaultWithIconFalseBackgroundColor="unset"
          menuFontWeight="500"
          menuFontFamily="Poppins"
          menuColor="#232124"
        />
        <StateDefaultWithIconFalse
          menu="Pricing"
          stateDefaultWithIconFalsePadding="var(--padding-3xs) var(--padding-5xl)"
          stateDefaultWithIconFalseBorderRadius="unset"
          stateDefaultWithIconFalseBackgroundColor="unset"
          menuFontWeight="500"
          menuFontFamily="Poppins"
          menuColor="#232124"
        />
        <StateDefaultWithIconFalse
          menu="Blog"
          stateDefaultWithIconFalsePadding="var(--padding-3xs) var(--padding-5xl)"
          stateDefaultWithIconFalseBorderRadius="unset"
          stateDefaultWithIconFalseBackgroundColor="unset"
          menuFontWeight="500"
          menuFontFamily="Poppins"
          menuColor="#232124"
        />
        <StateDefaultWithIconFalse
          menu="Resource"
          stateDefaultWithIconFalsePadding="var(--padding-3xs) var(--padding-5xl)"
          stateDefaultWithIconFalseBorderRadius="unset"
          stateDefaultWithIconFalseBackgroundColor="unset"
          menuFontWeight="500"
          menuFontFamily="Poppins"
          menuColor="#232124"
        />
      </div>
      <TypeprimarySizenormalSta
        button="Sign In"
        showIconPlaceholder={false}
        iconPlaceholderVisible={false}
        typeprimarySizenormalStaJustifyContent="flex-end"
        typeprimarySizenormalStaWidth="115px"
        buttonbaseBackgroundColor="unset"
        buttonbasePadding="var(--padding-xs) var(--padding-5xl)"
        buttonbaseBorder="1px solid var(--primary-60)"
        buttonLineHeight="140%"
        buttonColor="#ff5c00"
      />
    </div>
  );
};

export default Header;
