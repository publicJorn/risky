export type DistrictPathAttributes = {
  id: string
  d: string
  style: string
}

export type DistrictPath = {
  name: string
  type: string
  value: string
  attributes: DistrictPathAttributes
  children: any[]
}

export type MapSvgAttributes = {
  viewBow: string
  xmlns: string
  xmlSpace: string
  style: string
}

export type MapSvg = {
  name: string
  type: string
  value: string
  attributes: MapSvgAttributes
  children: DistrictPath[]
}
