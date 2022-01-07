import React from "react";
import { RepositoryItem } from "../repository-item";
import * as S from "./styled";

export const Repositories = () => {
    return (
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>  

            <S.WrapperTabPanel>
                <RepositoryItem 
                name="API.Curso" 
                linkToRepo="https://api.github.com/repos/Pydgey/API.Curso"
                fullName="Pydgey/API.Curso"/>
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                <RepositoryItem 
                name="ApiMusica" 
                linkToRepo="https://github.com/Pydgey/ApiMusica"
                fullName="Pydgey/ApiMusica"/>
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    );
}