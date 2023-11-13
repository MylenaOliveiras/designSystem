import {
  BottomNavigation,
  BottomNavigationAction,
  bottomNavigationClasses,
  bottomNavigationActionClasses,
} from "@mui/material";
import {
  CalendarToday,
  PeopleAltOutlined,
  Equalizer,
  MenuOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";

export const StyledBottomNavigation = styled(BottomNavigation)`
  &.${bottomNavigationClasses.root} {
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.08);
    border-radius: 8px 8px 0px 0px;

    span {
      font-size: 12px;
    }
  }
`;

export const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  &.${bottomNavigationActionClasses.root} {
    color: #bebebe;
    line-height: 160%;
    font-size: 12px;

    &.${bottomNavigationActionClasses.selected} {
      color: #4894ff;
    }
  }
`;

export default function Navbar() {
  const [value, setValue] = useState(0);

  return (
    <StyledBottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
    >
      <StyledBottomNavigationAction
        label="Consultas"
        icon={<CalendarToday />}
      />
      <StyledBottomNavigationAction
        label="Clientes"
        icon={<PeopleAltOutlined />}
      />
      <StyledBottomNavigationAction label="Relatórios" icon={<Equalizer />} />
      <StyledBottomNavigationAction label="Menu" icon={<MenuOutlined />} />
    </StyledBottomNavigation>
  );
}
