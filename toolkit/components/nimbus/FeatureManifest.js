/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const EXPORTED_SYMBOLS = ["FeatureManifest"];

/**
 * Features must be added here to be accessible through the NimbusFeature API.
 * !! Don't forget to validate changes with ./mach test toolkit/components/nimbus/test/unit/test_FeatureManifest.js
 */
const FeatureManifest = {
  search: {
    description: "The Search Services",
    hasExposure: false,
    variables: {
      experiment: {
        type: "string",
        fallbackPref: "browser.search.experiment",
        description:
          "Used to activate only matching configurations that contain the value in `experiment`",
      },
      extraParams: {
        type: "json",
        description:
          "Query parameters values for search engine configurations.",
      },
    },
  },
  urlbar: {
    description: "The Address Bar",
    hasExposure: true,
    exposureDescription:
      "Exposure is sent once per browsing session after the first urlbar query is made.",
    variables: {
      merinoEnabled: {
        type: "boolean",
        fallbackPref: "browser.urlbar.merino.enabled",
        description: "Whether Merino is enabled as a quick suggest source",
      },
      quickSuggestEnabled: {
        type: "boolean",
        fallbackPref: "browser.urlbar.quicksuggest.enabled",
        description: "Global toggle for the QuickSuggest feature",
      },
      quickSuggestNonSponsoredIndex: {
        type: "int",
        fallbackPref: "browser.urlbar.quicksuggest.nonSponsoredIndex",
        description:
          "The index of non-sponsored QuickSuggest results within the general group. A negative index is relative to the end of the group",
      },
      quickSuggestRemoteSettingsEnabled: {
        type: "boolean",
        fallbackPref: "browser.urlbar.quicksuggest.remoteSettings.enabled",
        description:
          "Whether Remote Settings is enabled as a quick suggest source",
      },
      quickSuggestScenario: {
        // IMPORTANT: This should not have a fallbackPref. See UrlbarPrefs.jsm.
        type: "string",
        description:
          "The Firefox Suggest scenario in which the user is enrolled",
        enum: ["history", "offline", "online"],
      },
      quickSuggestShouldShowOnboardingDialog: {
        type: "boolean",
        fallbackPref: "browser.urlbar.quicksuggest.shouldShowOnboardingDialog",
        description:
          "Whether or not to show the QuickSuggest onboarding dialog",
      },
      quickSuggestShowOnboardingDialogAfterNRestarts: {
        type: "int",
        fallbackPref:
          "browser.urlbar.quicksuggest.showOnboardingDialogAfterNRestarts",
        description:
          "Show QuickSuggest onboarding dialog after N browser restarts",
      },
      quickSuggestSponsoredIndex: {
        type: "int",
        fallbackPref: "browser.urlbar.quicksuggest.sponsoredIndex",
        description:
          "The index of sponsored QuickSuggest results within the general group. A negative index is relative to the end of the group",
      },
    },
  },
  aboutwelcome: {
    description: "The about:welcome page",
    hasExposure: true,
    exposureDescription:
      "Exposure is sent once per browsing session when the about:welcome URL is first accessed.",
    isEarlyStartup: true,
    variables: {
      enabled: {
        type: "boolean",
        fallbackPref: "browser.aboutwelcome.enabled",
        description:
          "Should users see about:welcome? If this is false, users will see a regular new tab instead.",
      },
      screens: {
        type: "json",
        fallbackPref: "browser.aboutwelcome.screens",
        description: "Content to show in the onboarding flow",
      },
      skipFocus: {
        type: "boolean",
        fallbackPref: "browser.aboutwelcome.skipFocus",
        description:
          "Should the urlbar should be focused when users first land on about:welcome?",
      },
      transitions: {
        type: "boolean",
        description: "Enable transition effect between screens",
      },
    },
  },
  abouthomecache: {
    description: "The startup about:home cache.",
    hasExposure: false,
    isEarlyStartup: true,
    variables: {
      enabled: {
        type: "boolean",
        fallbackPref: "browser.startup.homepage.abouthome_cache.enabled",
        description: "Is the feature enabled?",
      },
    },
  },
  firefox100: {
    description: "Firefox User-Agent version",
    hasExposure: false,
    isEarlyStartup: true,
    variables: {
      firefoxVersion: {
        type: "int",
        description: "Firefox version to spoof (or `0` to use default version)",
      },
    },
  },
  newtab: {
    description: "The about:newtab page",
    hasExposure: true,
    exposureDescription:
      "Exposure is sent once per browsing session when the first newtab page loads (either about:newtab or about:home).",
    isEarlyStartup: true,
    variables: {
      newTheme: {
        type: "boolean",
        description: "Enable the new theme",
      },
      customizationMenuEnabled: {
        type: "boolean",
        fallbackPref:
          "browser.newtabpage.activity-stream.customizationMenu.enabled",
        description: "Enable the customization panel inside of the newtab",
      },
      prefsButtonIcon: {
        type: "string",
        description: "Icon url to use for the preferences button",
      },
    },
  },
  pocketNewtab: {
    description: "The Pocket section in newtab",
    hasExposure: false,
    isEarlyStartup: true,
    variables: {
      spocPositions: {
        type: "string",
        fallbackPref:
          "browser.newtabpage.activity-stream.discoverystream.spoc-positions",
        description: "CSV string of spoc position indexes on newtab grid",
      },
      compactLayout: {
        type: "boolean",
        fallbackPref:
          "browser.newtabpage.activity-stream.discoverystream.compactLayout.enabled",
        description: "Enable compact cards on newtab grid",
      },
      loadMore: {
        type: "boolean",
        fallbackPref:
          "browser.newtabpage.activity-stream.discoverystream.loadMore.enabled",
        description:
          "A button to load more stories at the bottom of the Pocket section.",
      },
      lastCardMessageEnabled: {
        type: "boolean",
        fallbackPref:
          "browser.newtabpage.activity-stream.discoverystream.lastCardMessage.enabled",
        description:
          "The last card in the Pocket section is a message that they are currently at the end of the list of stories.",
      },
      newFooterSection: {
        type: "boolean",
        fallbackPref:
          "browser.newtabpage.activity-stream.discoverystream.newFooterSection.enabled",
        description: "Enable an updated Pocket section topics footer",
      },
      saveToPocketCard: {
        type: "boolean",
        fallbackPref:
          "browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled",
        description:
          "A save to Pocket button inside the card, shown on the card thumbnail, on hover.",
      },
    },
  },
  "password-autocomplete": {
    description: "A special autocomplete UI for password fields.",
    hasExposure: false,
    variables: {
      directMigrateSingleProfile: {
        type: "boolean",
        description: "Enable direct migration?",
      },
    },
  },
  shellService: {
    description: "Interface with OS, e.g., pinning and set default",
    hasExposure: false,
    isEarlyStartup: true,
    variables: {
      disablePin: {
        type: "boolean",
        description: "Disable pin to taskbar feature",
      },
      setDefaultBrowserUserChoice: {
        type: "boolean",
        fallbackPref: "browser.shell.setDefaultBrowserUserChoice",
        description: "Should it set as default browser",
      },
    },
  },
  upgradeDialog: {
    description: "The dialog shown for major upgrades",
    hasExposure: false,
    isEarlyStartup: true,
    variables: {
      enabled: {
        type: "boolean",
        fallbackPref: "browser.startup.upgradeDialog.enabled",
        description: "Is the feature enabled?",
      },
    },
  },
  privatebrowsing: {
    description: "about:privatebrowsing",
    hasExposure: true,
    exposureDescription:
      "Exposure is sent once per browsing session the first time the PB page loads",
    variables: {
      infoEnabled: {
        type: "boolean",
        description: "Should we show the info section.",
      },
      infoIcon: {
        type: "string",
        description:
          "Icon shown in the left side of the info section. Default is the private browsing icon.",
      },
      infoTitle: {
        type: "string",
        description: "Is the title in the info section enabled.",
      },
      infoTitleEnabled: {
        type: "boolean",
        description: "Is the title in the info section enabled.",
      },
      infoBody: {
        type: "string",
        description: "Text content in the info section.",
      },
      infoLinkText: {
        type: "string",
        description: "Text for the link in the info section.",
      },
      infoLinkUrl: {
        type: "string",
        description: "URL for the info section link.",
      },
      promoEnabled: {
        type: "boolean",
        description: "Should we show the promo section.",
      },
      promoSectionStyle: {
        type: "string",
        description:
          "Sets the position of the promo section. Possible values are: top, below-search, bottom. Default bottom.",
        enum: ["top", "below-search", "bottom"],
      },
      promoTitle: {
        type: "string",
        description: "The text content of the promo section.",
      },
      promoTitleEnabled: {
        type: "boolean",
        description: "Should we show text content in the promo section.",
      },
      promoLinkText: {
        type: "string",
        description: "The text of the link in the promo box.",
      },
      promoHeader: {
        type: "string",
        description: "The title of the promo section.",
      },
      promoLinkUrl: {
        type: "string",
        description: "URL for link in the promo box.",
      },
      promoLinkType: {
        type: "string",
        description:
          "Type of promo link type. Possible values: link, button. Default is link.",
        enum: ["link", "button"],
      },
      promoImageLarge: {
        type: "string",
        description:
          "URL for image used on the left side of the promo box, larger, showcases some feature. Default off.",
      },
      promoImageSmall: {
        type: "string",
        description:
          "URL for image used on the right side of the promo box, smaller, usually a logo. Default off.",
      },
    },
  },
  readerMode: {
    description: "Firefox Reader Mode",
    hasExposure: false,
    isEarlyStartup: true,
    variables: {
      pocketCTAVersion: {
        type: "string",
        fallbackPref: "reader.pocket.ctaVersion",
        description:
          "What version of Pocket CTA to show in Reader Mode (Empty string is no CTA)",
      },
    },
  },
};
