describe("WebdriverIO cross-browser E2E suite", () => {
  it("should open home page and display primary CTA button", async () => {
    const expectedTitle =
      "Open source test automation for web, mobile and desktop apps | WebdriverIO";
    await browser.url("/");
    await expect(browser).toHaveTitle(expectedTitle);
    const ctaBtn = await $$("div a.button--primary")[0];
    await ctaBtn.waitForClickable({ timeout: 5000 });
    await expect(ctaBtn).toBeDisplayed();
  });

  it("should open search modal and display search results", async () => {
    await browser.url("/");
    const searchButton = await $(".DocSearch-Button");
    await searchButton.waitForClickable({ timeout: 5000 });
    await searchButton.click();

    const searchModal = await $("div.DocSearch-Modal");
    await searchModal.waitForDisplayed({ timeout: 5000 });
    const searchField = await $("input#docsearch-input");
    await searchField.waitForDisplayed({ timeout: 5000 });
    await searchField.setValue("assertions");

    const hits = await $$(".DocSearch-Hits")[0];
    await hits.waitForDisplayed({ timeout: 5000 });
    await expect(hits).toBeDisplayed();
  });

  it("should open Getting Started documentation page", async () => {
    await browser.url("/");
    const startBtn = await $$("div a.button--primary")[0];
    await startBtn.waitForClickable({ timeout: 5000 });
    await startBtn.click();

    await expect(browser).toHaveUrl(/\/docs\/gettingstarted/i);

    const heading = await $("h1");
    await heading.waitForDisplayed({ timeout: 10000 });
    await expect(heading).toHaveText(/Getting Started/i);
  });

  it("should open API documentation page and display article", async () => {
    await browser.url("/");
    const referenceBtn = await $('.navbar__link[href*="/docs/api"]');
    await referenceBtn.waitForClickable({ timeout: 5000 });
    await referenceBtn.click();

    await expect(browser).toHaveUrl(/\/docs\/api/i);

    const heading = await $("h1");
    await heading.waitForDisplayed({ timeout: 10000 });
    await expect(heading).toBeDisplayed();
    const article = await $("article");
    await article.waitForDisplayed({ timeout: 10000 });
    await expect(article).toBeDisplayed();
  });

  it("should open Blog page and display post links", async () => {
    await browser.url("/blog");

    const firstPostLink = await $("(//article//h2/a)[1]");
    await firstPostLink.waitForDisplayed({ timeout: 5000 });
    await expect(firstPostLink).toBeDisplayed();
  });
});
