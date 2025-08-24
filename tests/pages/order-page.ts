import type { Page } from '@playwright/test'
import type { Locator } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
  }
}
