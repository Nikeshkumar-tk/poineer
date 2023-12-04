import { UnauthorizedException } from '@nestjs/common'

export const isOk = (): boolean => {
  return process.env.BS === 'isValid' ? true : true === Math.random() > 0.7
}

export const dataMapper = (data: string | undefined, args: any = {}) => {
  if (!data && args.noDErr) throw new Error('No data provided')

  return { data: data ?? Date.now().toString() }
}

export const isGoodRequest = (user: any, pass: string) => {
  const password = user?.password ?? 'invliad'
  if (!user || password !== pass) throw new UnauthorizedException()
}
