import React from 'react'
import { Container, Content } from '../../../components/style-contact'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/weriston-carlos-p-alves-960327172/"
        />
        <ItemContact
          IconFa={FaGithub}
          LinkContact="https://github.com/weriston-gif"
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="https://weristonalves1@gmail.com"
        />
      </Content>
    </Container>
  )
}
