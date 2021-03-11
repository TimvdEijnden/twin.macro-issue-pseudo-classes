import React from 'react'
import tw from 'twin.macro'

const App = () => (
  <div >
    <div tw="h-full m-5">
      <h1 tw="text-xl">There’s an issue in twin.macro 2.3.0 which causes pseudo classes such as :hover :active and :disabled to not be applied.</h1>
      <p tw="m-2">
      <button css={[tw`button-primary`]}>Primary button</button>
      </p>
      <p tw="m-2">
      <button css={[tw`button-primary`]} disabled={true} >Primary button disabled</button>
      </p>
    </div>
  </div>
)

export default App
