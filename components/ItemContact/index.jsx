import React from 'react'
import { Item, Icon, Text } from './style'

export default function ItemContact({ IconFa, LinkContact }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <a target="_blank" href={LinkContact}
      >
        {LinkContact}
      </a>
    </Item>
  )
}
