import { List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Linkstyle = styled(Link)({
  color: "black",
  fontWeight: 600,
  fontSize: "14px",
  fontFamily: "monospace",
  textDecoration: "none"
})

export const getStaticProps = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const json = await response.json()

  return {
    props: {users: json}
  }
}
 const NestedUser = ({users}) => {
 
  return (
    <>
    <List>
    {
      users && users?.map((users) => {
        return(
          <>
          <Linkstyle href={`${users?.id}`} key={users?.id}>
        <ListItem >
        <ListItemButton>
        <ListItemText primary={users?.name} />
      </ListItemButton>
      </ListItem>
      </Linkstyle>
      </>
        )
      })
    }
    </List>
    </>
  )
}
export default NestedUser
