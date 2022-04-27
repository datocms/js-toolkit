export default {
  baseUrl: 'https://account-api.datocms.com',
  resources: [
    {
      jsonApiType: 'session',
      endpoints: [
        {
          returnsCollection: false,
          name: 'create',
          rawName: 'rawCreate',
          urlTemplate: '/sessions',
          method: 'POST',
          comment: 'Create a new session',
          requestBodyType: 'SessionCreateSchema',
          simpleMethodAvailable: false,
          requestStructure: {
            type: '*',
            attributes: [
              'email',
              'password',
              'otp_code',
              'token',
              'account_id',
              'password',
              'otp_code',
            ],
            relationships: [],
          },
          responseType: 'SessionCreateTargetSchema',
        },
      ],
      namespace: 'session',
      resourceClassName: 'Session',
    },
    {
      jsonApiType: 'account',
      endpoints: [
        {
          returnsCollection: false,
          name: 'create',
          rawName: 'rawCreate',
          urlTemplate: '/account',
          method: 'POST',
          comment: 'Create a new account',
          requestBodyType: 'AccountCreateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account',
            attributes: [
              'email',
              'first_name',
              'last_name',
              'company',
              'password',
              'acquisition_method',
            ],
            relationships: [],
          },
          responseType: 'AccountCreateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'update',
          rawName: 'rawUpdate',
          urlTemplate: '/account',
          method: 'PUT',
          comment: 'Update a account',
          requestBodyType: 'AccountUpdateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account',
            attributes: [
              'email',
              'first_name',
              'last_name',
              'company',
              'password',
              'current_password',
              'otp_code',
            ],
            relationships: [],
          },
          responseType: 'AccountUpdateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'destroy',
          rawName: 'rawDestroy',
          urlTemplate: '/account/destroy',
          method: 'POST',
          comment: 'Delete a account',
          requestBodyType: 'AccountDestroySchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account_destroy_request',
            attributes: ['otp_code', 'password'],
            relationships: [],
          },
          responseType: 'AccountDestroyJobSchema',
        },
        {
          returnsCollection: false,
          name: 'find',
          rawName: 'rawFind',
          urlTemplate: '/account',
          method: 'GET',
          comment: 'Retrieve a account',
          simpleMethodAvailable: true,
          responseType: 'AccountSelfTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'resetPassword',
          rawName: 'rawResetPassword',
          urlTemplate: '/account/reset_password',
          method: 'POST',
          comment: 'Request a password reset',
          requestBodyType: 'AccountResetPasswordSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account',
            attributes: ['email'],
            relationships: [],
          },
        },
        {
          returnsCollection: false,
          name: 'activate_2Fa',
          rawName: 'rawActivate_2Fa',
          urlTemplate: '/account/activate-2fa',
          method: 'PUT',
          comment: 'Activates 2-factor authorization',
          requestBodyType: 'AccountActivate_2FaSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: '2fa_activation',
            attributes: ['otp_code', 'password'],
            relationships: [],
          },
          responseType: 'AccountActivate_2FaTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'reset_2Fa',
          rawName: 'rawReset_2Fa',
          urlTemplate: '/account/reset-2fa',
          method: 'PUT',
          comment: 'Generates 2-factor authorization secrets',
          simpleMethodAvailable: true,
          responseType: 'AccountReset_2FaTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'deactivate_2Fa',
          rawName: 'rawDeactivate_2Fa',
          urlTemplate: '/account/deactivate-2fa',
          method: 'PUT',
          comment: 'De-activates 2-factor authorization',
          requestBodyType: 'AccountDeactivate_2FaSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: '2fa_deactivation',
            attributes: ['otp_code', 'password'],
            relationships: [],
          },
          responseType: 'AccountDeactivate_2FaTargetSchema',
        },
      ],
      namespace: 'account',
      resourceClassName: 'Account',
    },
    {
      jsonApiType: 'site',
      endpoints: [
        {
          returnsCollection: false,
          name: 'find',
          rawName: 'rawFind',
          urlTemplate: '/sites/${siteId}',
          method: 'GET',
          comment: 'Retrieve a project',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: true,
            relType: 'SiteData',
          },
          simpleMethodAvailable: true,
          responseType: 'SiteSelfTargetSchema',
        },
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/sites',
          method: 'GET',
          comment: 'List all projects',
          simpleMethodAvailable: true,
          queryParamsType: 'SiteInstancesHrefSchema',
          responseType: 'SiteInstancesTargetSchema',
          paginatedResponse: {
            defaultLimit: 20,
            maxLimit: 50,
          },
        },
        {
          returnsCollection: false,
          name: 'create',
          rawName: 'rawCreate',
          urlTemplate: '/sites',
          method: 'POST',
          comment: 'Create a new project',
          requestBodyType: 'SiteCreateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'site',
            attributes: ['name', 'internal_subdomain', 'template'],
            relationships: [],
          },
          responseType: 'SiteCreateJobSchema',
        },
        {
          returnsCollection: false,
          name: 'update',
          rawName: 'rawUpdate',
          urlTemplate: '/sites/${siteId}',
          method: 'PUT',
          comment: 'Update project',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: true,
            relType: 'SiteData',
          },
          requestBodyType: 'SiteUpdateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'site',
            attributes: [
              'name',
              'domain',
              'internal_subdomain',
              'is_public_template',
            ],
            relationships: [],
          },
          responseType: 'SiteUpdateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'destroy',
          rawName: 'rawDestroy',
          urlTemplate: '/sites/${siteId}',
          method: 'DELETE',
          comment: 'Delete a project',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: true,
            relType: 'SiteData',
          },
          simpleMethodAvailable: true,
          responseType: 'SiteDestroyJobSchema',
        },
        {
          returnsCollection: false,
          name: 'duplicate',
          rawName: 'rawDuplicate',
          urlTemplate: '/sites/${siteId}/duplicate',
          method: 'POST',
          comment: 'Duplicate an existing project',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: true,
            relType: 'SiteData',
          },
          requestBodyType: 'SiteDuplicateSchema',
          simpleMethodAvailable: false,
          requestStructure: {
            type: 'site',
            attributes: [
              'name',
              'ignore_content',
              'payment_intent_id',
              'recurrence',
              'extra_packets',
              'billing_profile',
            ],
            relationships: ['plan', 'billing_profile'],
          },
          responseType: 'SiteDuplicateJobSchema',
        },
      ],
      namespace: 'sites',
      resourceClassName: 'Site',
    },
    {
      jsonApiType: 'site_subscription',
      endpoints: [
        {
          returnsCollection: false,
          name: 'create',
          rawName: 'rawCreate',
          urlTemplate: '/sites/${siteId}/subscriptions',
          method: 'POST',
          comment: 'Create a new subscription',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          requestBodyType: 'SiteSubscriptionCreateSchema',
          simpleMethodAvailable: false,
          requestStructure: {
            type: 'site_subscription',
            attributes: [
              'payment_intent_id',
              'recurrence',
              'extra_packets',
              'billing_profile',
            ],
            relationships: ['plan', 'billing_profile'],
          },
          responseType: 'SiteSubscriptionCreateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'simulate',
          rawName: 'rawSimulate',
          urlTemplate: '/sites/${siteId}/subscriptions/simulate',
          method: 'POST',
          comment: 'Simulate',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          requestBodyType: 'SiteSubscriptionSimulateSchema',
          simpleMethodAvailable: false,
          requestStructure: {
            type: 'site_subscription',
            attributes: [
              'recurrence',
              'extra_packets',
              'is_duplicate',
              'ignore_content',
              'billing_profile',
            ],
            relationships: ['plan', 'billing_profile'],
          },
          responseType: 'SiteSubscriptionSimulateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'validate',
          rawName: 'rawValidate',
          urlTemplate: '/sites/${siteId}/subscriptions/validate',
          method: 'POST',
          comment: 'Validate a new subscription',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          requestBodyType: 'SiteSubscriptionValidateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'site_subscription',
            attributes: ['extra_packets', 'ignore_content', 'is_duplicate'],
            relationships: ['plan'],
          },
          responseType: 'SiteSubscriptionValidateTargetSchema',
        },
      ],
      namespace: 'siteSubscription',
      resourceClassName: 'SiteSubscription',
    },
    {
      jsonApiType: 'account_subscription',
      endpoints: [
        {
          returnsCollection: false,
          name: 'create',
          rawName: 'rawCreate',
          urlTemplate: '/account-subscriptions',
          method: 'POST',
          comment: 'Create a new subscription',
          requestBodyType: 'AccountSubscriptionCreateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account_subscription',
            attributes: ['payment_intent_id', 'recurrence', 'billing_profile'],
            relationships: ['plan'],
          },
          responseType: 'AccountSubscriptionCreateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'simulate',
          rawName: 'rawSimulate',
          urlTemplate: '/account-subscriptions/simulate',
          method: 'POST',
          comment: 'Simulate',
          requestBodyType: 'AccountSubscriptionSimulateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account_subscription',
            attributes: ['recurrence', 'billing_profile'],
            relationships: ['plan'],
          },
          responseType: 'AccountSubscriptionSimulateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'validate',
          rawName: 'rawValidate',
          urlTemplate: '/account-subscriptions/validate',
          method: 'POST',
          comment: 'Validate a new subscription',
          requestBodyType: 'AccountSubscriptionValidateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'account_subscription',
            attributes: [],
            relationships: ['plan'],
          },
          responseType: 'AccountSubscriptionValidateTargetSchema',
        },
      ],
      namespace: 'accountSubscription',
      resourceClassName: 'AccountSubscription',
    },
    {
      jsonApiType: 'site_plan',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/site-plans',
          method: 'GET',
          comment: 'Retrieve enabled plans for account',
          simpleMethodAvailable: true,
          responseType: 'SitePlanInstancesTargetSchema',
        },
      ],
      namespace: 'sitePlans',
      resourceClassName: 'SitePlan',
    },
    {
      jsonApiType: 'account_plan',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/account-plans',
          method: 'GET',
          comment: 'Retrieve enabled plans for account',
          simpleMethodAvailable: true,
          responseType: 'AccountPlanInstancesTargetSchema',
        },
      ],
      namespace: 'accountPlans',
      resourceClassName: 'AccountPlan',
    },
    {
      jsonApiType: 'per_site_pricing_billing_profile',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/per-site-pricing-billing-profiles',
          method: 'GET',
          comment: "Retrieve all account's billing profiles",
          simpleMethodAvailable: true,
          responseType: 'PerSitePricingBillingProfileInstancesTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'find',
          rawName: 'rawFind',
          urlTemplate:
            '/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}',
          method: 'GET',
          comment: 'Retrieve a billing profile',
          urlPlaceholder: {
            variableName: 'perSitePricingBillingProfileId',
            isEntityId: true,
            relType: 'PerSitePricingBillingProfileData',
          },
          simpleMethodAvailable: true,
          responseType: 'PerSitePricingBillingProfileSelfTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'updateCreditCard',
          rawName: 'rawUpdateCreditCard',
          urlTemplate:
            '/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}/credit-card',
          method: 'PUT',
          comment: "Update a billing profile's credit card",
          urlPlaceholder: {
            variableName: 'perSitePricingBillingProfileId',
            isEntityId: true,
            relType: 'PerSitePricingBillingProfileData',
          },
          requestBodyType: 'PerSitePricingBillingProfileUpdateCreditCardSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'card',
            attributes: ['payment_intent_id'],
            relationships: [],
          },
          responseType:
            'PerSitePricingBillingProfileUpdateCreditCardTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'updateInfo',
          rawName: 'rawUpdateInfo',
          urlTemplate:
            '/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}/info',
          method: 'PUT',
          comment: "Update a billing profile's billing information",
          urlPlaceholder: {
            variableName: 'perSitePricingBillingProfileId',
            isEntityId: true,
            relType: 'PerSitePricingBillingProfileData',
          },
          requestBodyType: 'PerSitePricingBillingProfileUpdateInfoSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'per_site_pricing_billing_profile',
            attributes: [
              'first_name',
              'last_name',
              'company',
              'address_line',
              'city',
              'email',
              'country',
              'state',
              'zip',
              'vat_number',
              'cf_cod_fiscale',
            ],
            relationships: [],
          },
          responseType: 'PerSitePricingBillingProfileUpdateInfoTargetSchema',
        },
      ],
      namespace: 'perSitePricingBillingProfiles',
      resourceClassName: 'PerSitePricingBillingProfile',
    },
    {
      jsonApiType: 'per_account_pricing_billing_profile',
      endpoints: [
        {
          returnsCollection: false,
          name: 'find',
          rawName: 'rawFind',
          urlTemplate: '/per-account-pricing-billing-profile',
          method: 'GET',
          comment: 'Retrieve a billing profile',
          simpleMethodAvailable: true,
          responseType: 'PerAccountPricingBillingProfileSelfTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'updateCreditCard',
          rawName: 'rawUpdateCreditCard',
          urlTemplate: '/per-account-pricing-billing-profile/credit-card',
          method: 'PUT',
          comment: "Update a billing profile's credit card",
          requestBodyType:
            'PerAccountPricingBillingProfileUpdateCreditCardSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'card',
            attributes: ['payment_intent_id'],
            relationships: [],
          },
          responseType:
            'PerAccountPricingBillingProfileUpdateCreditCardTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'updateInfo',
          rawName: 'rawUpdateInfo',
          urlTemplate: '/per-account-pricing-billing-profile/info',
          method: 'PUT',
          comment: "Update a billing profile's billing information",
          requestBodyType: 'PerAccountPricingBillingProfileUpdateInfoSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'per_account_pricing_billing_profile',
            attributes: [
              'first_name',
              'last_name',
              'company',
              'address_line',
              'city',
              'email',
              'country',
              'state',
              'zip',
              'vat_number',
              'cf_cod_fiscale',
              'po_number',
            ],
            relationships: [],
          },
          responseType: 'PerAccountPricingBillingProfileUpdateInfoTargetSchema',
        },
      ],
      namespace: 'perAccountPricingBillingProfile',
      resourceClassName: 'PerAccountPricingBillingProfile',
    },
    {
      jsonApiType: 'invoice',
      endpoints: [
        {
          returnsCollection: true,
          name: 'perAccountPricingBillingProfileList',
          rawName: 'rawPerAccountPricingBillingProfileList',
          urlTemplate: '/per-account-pricing-billing-profile/invoices',
          method: 'GET',
          comment: 'Retrieve all invoices',
          simpleMethodAvailable: true,
          responseType:
            'InvoicePerAccountPricingBillingProfileInstancesTargetSchema',
        },
        {
          returnsCollection: true,
          name: 'perSitePricingBillingProfileList',
          rawName: 'rawPerSitePricingBillingProfileList',
          urlTemplate:
            '/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}/invoices',
          method: 'GET',
          comment: 'Retrieve all invoices',
          urlPlaceholder: {
            variableName: 'perSitePricingBillingProfileId',
            isEntityId: false,
            relType: 'PerSitePricingBillingProfileData',
          },
          simpleMethodAvailable: true,
          responseType:
            'InvoicePerSitePricingBillingProfileInstancesTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'perAccountPricingBillingProfileCollectUnpaid',
          rawName: 'rawPerAccountPricingBillingProfileCollectUnpaid',
          urlTemplate:
            '/per-account-pricing-billing-profile/invoices/collect-unpaid',
          method: 'GET',
          comment: 'Collect all unpaid invoices',
          requestBodyType:
            'InvoicePerAccountPricingBillingProfileCollectUnpaidSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'invoice_collection',
            attributes: ['payment_intent_id'],
            relationships: [],
          },
          responseType:
            'InvoicePerAccountPricingBillingProfileCollectUnpaidTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'perSitePricingBillingProfileCollectUnpaid',
          rawName: 'rawPerSitePricingBillingProfileCollectUnpaid',
          urlTemplate:
            '/per-site-pricing-billing-profiles/${perSitePricingBillingProfileId}/invoices/collect-unpaid',
          method: 'GET',
          comment: 'Collect all unpaid invoices',
          urlPlaceholder: {
            variableName: 'perSitePricingBillingProfileId',
            isEntityId: false,
            relType: 'PerSitePricingBillingProfileData',
          },
          requestBodyType:
            'InvoicePerSitePricingBillingProfileCollectUnpaidSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'invoice_collection',
            attributes: ['payment_intent_id'],
            relationships: [],
          },
          responseType:
            'InvoicePerSitePricingBillingProfileCollectUnpaidTargetSchema',
        },
      ],
      namespace: 'invoices',
      resourceClassName: 'Invoice',
    },
    {
      jsonApiType: 'resource_usage',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/resource-usages',
          method: 'GET',
          comment: 'Retrieve all resource usages',
          simpleMethodAvailable: true,
          responseType: 'ResourceUsageInstancesTargetSchema',
        },
      ],
      namespace: 'resourceUsages',
      resourceClassName: 'ResourceUsage',
    },
    {
      jsonApiType: 'job_result',
      endpoints: [
        {
          returnsCollection: false,
          name: 'find',
          rawName: 'rawFind',
          urlTemplate: '/job-results/${jobResultId}',
          method: 'GET',
          comment: 'Retrieve a job result',
          urlPlaceholder: {
            variableName: 'jobResultId',
            isEntityId: true,
            relType: 'JobResultData',
          },
          simpleMethodAvailable: true,
          responseType: 'JobResultSelfTargetSchema',
        },
      ],
      namespace: 'jobResults',
      resourceClassName: 'JobResult',
    },
    {
      jsonApiType: 'site_transfer',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/site-transfers',
          method: 'GET',
          comment: 'List all pending transfer requests',
          simpleMethodAvailable: true,
          responseType: 'SiteTransferInstancesTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'find',
          rawName: 'rawFind',
          urlTemplate: '/site-transfers/${siteTransferId}',
          method: 'GET',
          comment: 'Retrieve a transfer',
          urlPlaceholder: {
            variableName: 'siteTransferId',
            isEntityId: true,
            relType: 'SiteTransferData',
          },
          simpleMethodAvailable: true,
          responseType: 'SiteTransferSelfTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'create',
          rawName: 'rawCreate',
          urlTemplate: '/sites/${siteId}/transfer',
          method: 'POST',
          comment: 'Create a new site transfer request',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          requestBodyType: 'SiteTransferCreateSchema',
          simpleMethodAvailable: true,
          requestStructure: {
            type: 'site_transfer',
            attributes: ['account_email'],
            relationships: [],
          },
          responseType: 'SiteTransferCreateTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'destroy',
          rawName: 'rawDestroy',
          urlTemplate: '/sites/${siteId}/transfer',
          method: 'DELETE',
          comment: 'Destroy a site transfer request',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          simpleMethodAvailable: true,
          responseType: 'SiteTransferDestroyTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'simulateAccept',
          rawName: 'rawSimulateAccept',
          urlTemplate: '/site-transfers/${siteTransferId}/simulate-accept',
          method: 'PUT',
          comment: 'Simulate accept',
          urlPlaceholder: {
            variableName: 'siteTransferId',
            isEntityId: true,
            relType: 'SiteTransferData',
          },
          requestBodyType: 'SiteTransferSimulateAcceptSchema',
          simpleMethodAvailable: false,
          requestStructure: {
            type: 'site_transfer',
            attributes: ['billing_profile'],
            relationships: ['billing_profile'],
          },
          responseType: 'SiteTransferSimulateAcceptTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'accept',
          rawName: 'rawAccept',
          urlTemplate: '/site-transfers/${siteTransferId}/accept',
          method: 'PUT',
          comment: 'Accept a site transfer request',
          urlPlaceholder: {
            variableName: 'siteTransferId',
            isEntityId: true,
            relType: 'SiteTransferData',
          },
          requestBodyType: 'SiteTransferAcceptSchema',
          simpleMethodAvailable: false,
          requestStructure: {
            type: 'site_transfer',
            attributes: ['payment_intent_id', 'billing_profile'],
            relationships: ['billing_profile'],
          },
          responseType: 'SiteTransferAcceptTargetSchema',
        },
        {
          returnsCollection: false,
          name: 'decline',
          rawName: 'rawDecline',
          urlTemplate: '/site-transfers/${siteTransferId}/decline',
          method: 'PUT',
          comment: 'Decline a site transfer request',
          urlPlaceholder: {
            variableName: 'siteTransferId',
            isEntityId: true,
            relType: 'SiteTransferData',
          },
          simpleMethodAvailable: true,
        },
      ],
      namespace: 'siteTransfers',
      resourceClassName: 'SiteTransfer',
    },
    {
      jsonApiType: 'site_invitation',
      endpoints: [
        {
          returnsCollection: false,
          name: 'redeem',
          rawName: 'rawRedeem',
          urlTemplate:
            '/site_invitations/{(%2Fschemata%2Ffield%23%2Fdefinitions%2Fsite_invitation%2Ftoken)}/redeem',
          method: 'PUT',
          comment: 'Redeem token',
          simpleMethodAvailable: true,
          responseType: 'SiteInvitationRedeemTargetSchema',
        },
      ],
      namespace: 'siteInvitation',
      resourceClassName: 'SiteInvitation',
    },
    {
      jsonApiType: 'subscription_limit',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/sites/${siteId}/subscription-limits',
          method: 'GET',
          comment: 'Get all the subscription limits',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          simpleMethodAvailable: true,
          responseType: 'SubscriptionLimitInstancesTargetSchema',
        },
      ],
      namespace: 'subscriptionLimits',
      resourceClassName: 'SubscriptionLimit',
    },
    {
      jsonApiType: 'subscription_feature',
      endpoints: [
        {
          returnsCollection: true,
          name: 'list',
          rawName: 'rawList',
          urlTemplate: '/sites/${siteId}/subscription-features',
          method: 'GET',
          comment: 'Get all the subscription features',
          urlPlaceholder: {
            variableName: 'siteId',
            isEntityId: false,
            relType: 'SiteData',
          },
          simpleMethodAvailable: true,
          responseType: 'SubscriptionFeatureInstancesTargetSchema',
        },
      ],
      namespace: 'subscriptionFeatures',
      resourceClassName: 'SubscriptionFeature',
    },
  ],
};
