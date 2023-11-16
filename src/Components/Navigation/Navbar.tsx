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
import { Theme } from "../../Theme";
import React from "react";

export const StyledBottomNavigation = styled(BottomNavigation)`
  &.${bottomNavigationClasses.root} {
    box-shadow: ${Theme.shadows[2]};
    border-radius: 8px 8px 0px 0px;

    span {
      font-size: ${Theme.typography.h3.fontSize}px;
    }
  }
`;

export const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  &.${bottomNavigationActionClasses.root} {
    color: ${Theme.palette.gray02};
    line-height: 160%;
    font-size: ${Theme.typography.h3.fontSize}px;

    &.${bottomNavigationActionClasses.selected} {
      color: ${Theme.palette.blue02};
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
