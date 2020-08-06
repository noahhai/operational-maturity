export var json = {
  title: "Operational Maturity Score Card",
  showProgressBar: "top",
  completedHtml:
    "<p><h4>You have completed the evaluation. Please find your score above.</h4></p><p>",
  pages: [
    {
      name: "security",
      title: "Security",
      elements: [
        {
          type: "panel",
          innerIndent: 2,
          name: "rbac",
          title: "Role Based Access Control",
          elements: [
            {
              type: "radiogroup",
              name:
                "Have we established a formal process for checking RBAC drift?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
              weight: 0.9,
            },
            {
              type: "radiogroup",
              name:
                "Do we have a formal process for regularly checking rbac/configuration in our cloud environments?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name:
                "Do we have a formal process for approval of technical employee access to cloud environments? Do we maintain a list of this access?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name:
                "Do we have a formal process for deactivating technical users in all systems upon departure from company?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
          ],
        },
        {
          type: "panel",
          innerIndent: 2,
          name: "intrusion",
          title: "Intrusion",
          elements: [
            {
              type: "radiogroup",
              name:
                "Do we conduct any audits on network logs for attempted or realized attacks?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },

            {
              type: "radiogroup",
              name:
                "Do we have owners for different systems and have a formalized process for upgrading services/patching vulnerabilities?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name: "Do we do static analysis for vulnerabilities?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name:
                "Do all team members check for security issues during code reviews?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name: "Do we periodically employ penetration testing?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
          ],
        },
        {
          type: "panel",
          innerIndent: 2,
          name: "multitenancy",
          title: "Multitenancy",
          elements: [
            {
              type: "radiogroup",
              name: "Do we have a physical isolation for tenants?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },

            {
              type: "radiogroup",
              name:
                "Have we created a formalized plan examining multitenancy and isolation level in all services?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name:
                "Are we transparent with our customers regarding their isolation level?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name:
                "Which parts of our infrastructure are running with shared resources?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "panel",
              innerIndent: 2,
              elements: [
                {
                  type: "radiogroup",
                  name:
                    "Have we examined possible performance/DOS issues and do we mitigate them with rate limitation?",
                  choices: [
                    { value: true, text: "Yes" },
                    { value: false, text: "No" },
                  ],
                  default: "no",
                  isrequired: true,
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          innerIndent: 2,
          name: "auditing",
          title: "Auditing",
          elements: [
            {
              type: "radiogroup",
              name:
                "Do we audit all destructive/write operations in all systems?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },

            {
              type: "radiogroup",
              name: "Do we have any blind spots?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "radiogroup",
              name: "Do we also audit data access for customer data?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
            {
              type: "panel",
              innerIndent: 2,
              elements: [
                {
                  type: "radiogroup",
                  name: "Do we have any automated intrusion detection?",
                  choices: [
                    { value: true, text: "Yes" },
                    { value: false, text: "No" },
                  ],
                  default: "no",
                  isrequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "monitoring",
      title: "Monitoring",
      elements: [
        {
          type: "radiogroup",
          name:
            "Do we have a non-onerous way to check global system health (performance metrics for servers). e.g. not having to look in 5+ different places?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Do we regularly check global system health? Do we ever find performance issues before or concurrent with our customers finding them? Are we ever proactive or just reactive?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "panel",
          innerIndent: 2,
          elements: [
            {
              type: "radiogroup",
              name: "Do we have notifications for performance issues?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "Do we have a single source for application logs?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name: "Do we actually monitor application logs?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Do we have granular-enough application logs with enough detail, but not too much that we spam ourselves? (If there is an issue, is it not likely to become a needle in a haystack)?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Do we have any hooks on application logs (or thresholds) with notifications configured?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Do we have a process for employees to monitor these notifications 24-7?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "If there is an issue in a certain sub-system or microservice, are we able to quickly adjust the log level of that system to assist in debugging the issue?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
      ],
    },

    {
      name: "incidentResponse",
      title: "Incident Response",
      elements: [
        {
          type: "radiogroup",
          name:
            "Is there a defined process for orchestrating response to incidents?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Does the incident response plan clearly partition the types of incidents/affected systems and the owners/experts for each?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name: "Is there someone technical on-call for incidence response?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "panel",
          innerIndent: 2,
          elements: [
            {
              type: "radiogroup",
              name:
                "Depending on the incident time and the type of incident, what is the longest possible delay for an incident response?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
          ],
        },
        {
          type: "radiogroup",
          name:
            "Are fire drills conducted at a regular interval? What percentage of the system is tested and to which extent? Is there a justification for which parts of the system are most or least tested (in terms of how critical and/or fragile they are)?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Is there a transparent process for conducting post-mortems on resolved incidents? Is the whole team educated? Are the learnings incorporated into fire drills and other relevant processes?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Do we have granular-enough application logs with enough detail, but not too much that we spam ourselves? (If there is an issue, is it not likely to become a needle in a haystack)?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Is there a standard for notifying customers of the incident, the cause of the incident, any security impacts, and the resolution?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
      ],
    },

    {
      name: "availability",
      title: "Availability",
      elements: [
        {
          type: "radiogroup",
          name: "Have we studied all systems and ensured multi-AZ redundancy?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "panel",
          innerIndent: 2,
          elements: [
            {
              type: "radiogroup",
              name:
                "For any single points of failure, have we documented and justified them?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
          ],
        },
        {
          type: "radiogroup",
          name:
            "For any failover points requiring manual intervention, have these been documented?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "panel",
          innerIndent: 2,
          elements: [
            {
              type: "radiogroup",
              name: "Do we test these manual failovers during fire drills?",
              choices: [
                { value: true, text: "Yes" },
                { value: false, text: "No" },
              ],
              default: "no",
              isrequired: true,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "Do we test and verify multi-AZ failovers during fire drills?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "panel",
          title:
            "WRT 5-9s https://www.iheavy.com/2012/04/01/the-myth-of-five-nines-why-high-availability-is-overrated/",
          innerIndent: 2,
          elements: [
            {
              type: "html",
              name:
                "Focusing on rigid metrics like five 9s is often unrealistic, and also potentially a waste of resources and man hours.",
              html:
                "<p>Focusing on rigid metrics like five 9s is often unrealistic, and also potentially a waste of resources and man hours.</p>",
            },

            {
              type: "html",
              name:
                "More important when a startup and worried about a reputation, but in a healthy relationship, customers are there for many larger reasons than not being down more than 10 seconds every month.",
              html:
                "<p>More important when a startup and worried about a reputation, but in a healthy relationship, customers are there for many larger reasons than not being down more than 10 seconds every month.</p>",
            },
            {
              type: "html",
              name:
                "Better to focus on qualitative and process-oriented measures",
              html:
                "<p>Better to focus on qualitative and process-oriented measures</p>",
            },
          ],
        },
      ],
    },

    {
      name: "issueResolution",
      title: "Issue Resolution",
      elements: [
        {
          type: "radiogroup",
          name:
            "Is there a defined process for customers to submit issues/tickets?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Are these issues/tickets persisted, and tracked somewhere? Both to ensure reolution as well as to provide metrics and track performance",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Is there a SLA for customers that is not merely a standard industry SLA, but one that has been examined and confirmed as being realistic for the tech team to uphold?z",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name:
            "Is this process curated before it reaches technical employees? (Should not waste time)",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
        {
          type: "radiogroup",
          name: "Is there a defined process for severity level and triage?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
        },
      ],
    },

    {
      name: "culture",
      title: "Culture/Best Practices",
      elements: [
        {
          type: "radiogroup",
          name:
            "For each of the above areas is there a defined owner who maintains quality and adherence to principles?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Do all employees understand the impact of technical bugs on business performance?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Does code run through multiple stages prior to being promoted to production?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "How long do deployments take? What percent automated are they? Are we able to deploy new code quickly and often?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "For CI/CD are there artifacts produced that can then be promoted through multiple stages to production? (or are we using the exact same process, in the case we're not graduating the same exact bytes)",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Is there a strong focus on QA and resolving bugs prior to production?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "Is there a formal process for documenting technical debt and including sprint time for reducing it?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
        {
          type: "radiogroup",
          name:
            "What is the process for integrating feedback into our SDLC? Do we have retros on big issues/service interruptions and transparent post-mortems?",
          choices: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          default: "no",
          isrequired: true,
          weight: 0.9,
        },
      ],
    },
  ],
};

// {
//   type: "rating",
//   name: "formalProcessCloudEnvironment",
//   title:
//     "Do we have a formal process for approval of technical employee access to cloud environments?",
//   mininumRateDescription: "Not Satisfied",
//   maximumRateDescription: "Completely satisfied",
//   isrequired: true,
// },
