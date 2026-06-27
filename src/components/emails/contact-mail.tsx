// Get the full source code, including the theme and Tailwind config:
// https://github.com/resend/react-email/tree/canary/apps/demo/emails

import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import { barebonesBoxedTailwindConfig } from "./theme";
import { BarebonesFonts } from "./theme-fonts";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface ContactMailProps {
  name: string;
  mail: string;
  message: string;
}

export const ContactMail = ({ name, mail, message }: ContactMailProps) => (
  <Tailwind config={barebonesBoxedTailwindConfig}>
    <Html>
      <Head>
        <BarebonesFonts />
      </Head>

      <Body className="bg-bg-2 m-0 text-center font-sans">
        <Preview>New message from {name} via Portfolio</Preview>
        <Container className="mobile:mt-0 mx-auto mt-8 w-full max-w-[640px]">
          <Section>
            <Section className="bg-bg mobile:px-2 px-6 py-4">
              <Section className="mb-3 px-6">
                <Row>
                  <Column className="py-[7px] align-middle">
                    <Img
                      src={`${baseUrl}/static/shared/logo-black.png`}
                      alt=""
                      width={23}
                      className="block"
                    />
                  </Column>
                </Row>
              </Section>

              <Section className="bg-bg-2 mobile:px-6 mobile:py-12 rounded-[8px] px-[40px] py-20 text-left">
                <Section className="mb-8">
                  <Heading
                    as="h1"
                    className="font-28 text-fg m-0 text-left font-sans">
                    New message from {name}
                  </Heading>
                </Section>

                <Text className="font-13 text-fg-3 mt-0 mb-2 text-left font-sans">
                  From
                </Text>
                <Text className="font-16 text-fg m-0 text-left font-sans">
                  {name} ({mail})
                </Text>

                <Text className="font-13 text-fg-3 mt-8 mb-2 text-left font-sans">
                  Message
                </Text>
                <Text className="font-16 text-fg-2 m-0 max-w-[420px] text-left font-sans">
                  {message}
                </Text>
              </Section>

              {/* Footer */}
              <Section className="bg-bg">
                <Row>
                  <Column className="px-6 py-10 text-center">
                    <Text className="font-13 text-fg-3 mx-auto mt-0 mb-8 max-w-[280px] text-center font-sans">
                      This message was sent via your portfolio contact form.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

ContactMail.PreviewProps = {
  name: "John Doe",
  mail: "john@example.com",
  message: "Hi, I'd love to work with you on a project!",
} satisfies ContactMailProps;

export default ContactMail;
