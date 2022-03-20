import { render } from '@testing-library/react'
import Card from '.';

test('Users must be rendered in first card', () => {
    const { debug } = render(
        <Card handleIdUser={() => {}} loading={true} profiles={[]} userId={"1"}/>
    )

    debug()
});