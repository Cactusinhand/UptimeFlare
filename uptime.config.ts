const pageConfig = {
  title: "Cactusinhand's Status Page",
  links: [
    { link: 'https://github.com/Cactusinhand/UptimeFlare', label: 'GitHub', highlight: true },
    { link: 'https://oschina.win/', label: 'Blog' },
    { link: 'mailto:me@oschina.win', label: 'Email'},
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  monitors: [
    {
      id: 'CF',
      name: 'blog hosted on CloudFlare Monitor',
      method: 'GET',
      target: 'https://oschina.win',
      tooltip: 'https://oschina.win',
      statusPageLink: 'https://oschina.win',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200, 403],
    },
    {
      id: 'Vercel',
      name: 'Blog hosted on Vercel Monitor',
      method: 'GET',
      target: 'https://vercel.oschina.win',
      tooltip: 'https://vercel.oschina.win',
      statusPageLink: 'https://vercel.oschina.win',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200, 403],
    },
    {
      id: 'OneDriver',
      name: 'OneDriver Monitor',
      method: 'GET',
      target: 'https://cloud.oschina.win',
      tooltip: 'https://cloud.oschina.win',
      statusPageLink: 'https://cloud.oschina.win',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200, 403],
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    appriseApiServer: "https://apprise-notice-service.vercel.app/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    recipientUrl: "feishu://77d03915-f040-4dad-9816-7ceb89f6026b",
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
