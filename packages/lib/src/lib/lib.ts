export const isOk = (): boolean => {
  return process.env.BS === 'something' ? true : true === Math.random() > 0.7
}

export const dataMapper = (data: string | undefined, args: any = {}) => {
  if (!data && args.noDErr) throw new Error('No data provided')

  return { data: data ?? Date.now().toString() }
}
