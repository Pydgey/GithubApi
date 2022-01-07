import React from "react";
import * as S from "./styled";

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImg src="https://avatars.githubusercontent.com/u/79947677?v=4" alt="User Avatar"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>Felipe Reis</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a 
                        href="https://github.com/Pydgey"
                        target="_blank"
                        rel="noreferrer"
                        >
                            Pydgey
                        </a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers:</h4>
                        <span>0</span>
                    </div>

                    <div>
                        <h4>Starred:</h4>
                        <span>1</span>
                    </div>

                    <div>
                        <h4>Followings:</h4>
                        <span>0</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;