const NOTIFICATION_API_URL = process.env.NOTIFICATION_API_URL

export const PageSizeTypes = {
  notifications: 'notifications'
}

// !!! Left side of text 'PageSize' must be specified in PageSizeTypes object !!!
export const PageSizes = {
  notificationsPageSize: Number(process.env.NOTIFICATIONS_PAGE_SIZE) || 100
}

// !!! Left side of text 'MaxPageSize' must be specified in PageSizeTypes object !!!
export const MaxPageSizes = {
  notificationsMaxPageSize: Number(process.env.NOTIFICATIONS_MAX_PAGE_SIZE) || 500
}

export function GetPageSize(type: string, querySize?: number) {
  const maxSize = MaxPageSizes[`${type}MaxPageSize`]
  const defaultSize = PageSizes[`${type}PageSize`]

  return Number(querySize) && Number(querySize) <= maxSize ? Number(querySize) : defaultSize
}

export function GetPagesForResponse(numPages: number, perPage: number, nextPageKeys) {
  const lastEvaluatedKeyQueryParam = `lastEvaluatedKey=${nextPageKeys?.lastEvaluatedKey}`
  const moduleQueryParam = `module=${nextPageKeys?.module}`

  let query = ''
  if (nextPageKeys?.lastEvaluatedKey) {
    query += lastEvaluatedKeyQueryParam

    if (nextPageKeys?.module) {
      query += `&${moduleQueryParam}`
    }
  }

  const nextPage = query && nextPageKeys.url ? `${NOTIFICATION_API_URL}/api/v1${nextPageKeys.url}?${query}` : null

  return {
    next: nextPage,
    numPages,
    perPage
  }
}
