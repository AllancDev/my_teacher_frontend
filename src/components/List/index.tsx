import { Button } from "@mui/material"
import { Description, EmptyList, Information, ListItem, ListStyled, Name, Photo, Value } from "./styles"

import { Teacher } from '../../@types/Teacher'


interface ListProps {
    data: Teacher[]
}

export const List = ({ data }: ListProps) => {
    return (
        <>
            {data.length > 0 ? (
                <ListStyled>
                    {
                        data.map(teacher => (
                            <ListItem key={teacher.id}>
                                <Photo src={teacher.photo} />
                                <Information>
                                    <Name>{teacher.name}</Name>
                                    <Value>{teacher.price_hour.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Value>

                                    <Description>{teacher.description}</Description>
                                    <Button sx={{ width: '70%' }}>Marcar Aula com {teacher.name} </Button>
                                </Information>
                            </ListItem>
                        ))
                    }

                </ListStyled>
            ) : (
                <EmptyList>Nenhum item encontrado.</EmptyList>
            )}
        </>
    )
}