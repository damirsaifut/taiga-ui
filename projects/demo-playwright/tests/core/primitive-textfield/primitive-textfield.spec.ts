import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`TuiPrimitiveTextfield`, () => {
    test.use({viewport: {width: 400, height: 350}});

    test(`Tooltip in primitive-textfield works`, async ({page}) => {
        await tuiGoto(
            page,
            `components/primitive-textfield/API?tuiHintContent=Ivan%20Ivanov`,
        );

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.scrollIntoViewIfNeeded();
        await apiPageExample.locator(`tui-tooltip`).click();

        await expect(page.locator(`tui-hint`)).toBeAttached();
        await expect(page).toHaveScreenshot(`01-hint.png`, {
            mask: [page.locator(`tui-doc-page header`)],
        });
    });

    test(`prefix + postfix align on the same line with input's value`, async ({page}) => {
        await tuiGoto(
            page,
            `components/primitive-textfield/API?value=TEXT&postfix=__!&prefix=!__`,
        );

        await expect(new TuiDocumentationPagePO(page).apiPageExample).toHaveScreenshot(
            `02-prefix-postfix.png`,
        );
    });

    test(`label should not be visible in focused state with filler`, async ({page}) => {
        await tuiGoto(
            page,
            `components/primitive-textfield/API?tuiTextfieldFiller=filler&tuiTextfieldLabelOutside=true`,
        );

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.getByRole(`textbox`).click();
        await expect(apiPageExample).toHaveScreenshot(`03-label-filler.png`);
    });
});
