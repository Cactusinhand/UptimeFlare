const pageConfig = {
  title: "Cactusinhand's Status Page",
  links: [
    { link: 'https://github.com/cactusinhand', label: 'GitHub', highlight: true },
    { link: 'https://oschina.win/', label: 'Blog' },
    { link: 'mailto:colin1@foxmail.com', label: 'Email Me'},
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  monitors: [
    {
      id: 'http_monitor',
      name: 'My blog HTTP Monitor',
      method: 'GET',
      target: 'https://oschina.win',
      tooltip: 'https://oschina.win',
      statusPageLink: 'https://oschina.win',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200, 403],
    },
    {
      id: 'tcp_monitor',
      name: 'My blog TCP Monitor',
      method: 'TCP_PING',
      target: '104.21.36.225',
      tooltip: 'https://oschina.win',
      statusPageLink: 'https://oschina.win',
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    // appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    // recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    // timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    // gracePeriod: 5,
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
