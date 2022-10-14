import { HeaderContainer, Logo } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/MyTeacher.svg" />
            </div>

            <p>Encontre o professor perfeito!</p>
        </HeaderContainer>
    )
}