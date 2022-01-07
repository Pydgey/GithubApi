import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    widht: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: white;
    margin-right: 8px;

    &:focus {
        outline: none;
        box-shadow: 0 0 1em #ccc;
    }

    &.is-selected {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white;
        box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);
    }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);
    display: none;
    margin-top: -4px;
    margin-left: 4px;

    &.is-selected {
        border-top-left-radius: 0;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white;
        display: block;
    }
`;
WrapperTabPanel.tabsRole = "TabPanel";
