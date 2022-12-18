/**
 * cra의 index.html 역할을 하는 곳
 * <html> <head> 를 수정하려면 여기서 해야 함
 */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
