/**
 * List all the Icons available
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@dnb/eufemia/src/components'
import { P } from '@dnb/eufemia/src'
import * as PrimaryIcons from '@dnb/eufemia/src/icons/dnb/primary_icons'
import * as SecondaryIcons from '@dnb/eufemia/src/icons/dnb/secondary_icons'
import * as PrimaryIconsMedium from '@dnb/eufemia/src/icons/dnb/primary_icons_medium'
import * as SecondaryIconsMedium from '@dnb/eufemia/src/icons/dnb/secondary_icons_medium'
import iconsMetaData from '@dnb/eufemia/src/icons/dnb/icons-meta.json'
import AutoLinkHeader from '../../tags/AutoLinkHeader'
import Copy from '../../tags/Copy'
import {
  listStyle,
  listItemStyle,
  listItemInnerStyle,
} from './ListAllIcons.module.scss'

export const getListOfIcons = (icons) => {
  return Object.entries(icons)
    .map(([iconName, Svg]) => {
      if (typeof Svg !== 'function') {
        return null
      }
      const meta =
        iconsMetaData && iconsMetaData[iconName]
          ? iconsMetaData[iconName]
          : { tags: [], created: Date.now() }
      const category = grabCategory(meta.name)
      return { iconName, Svg, category, ...meta }
    })
    .filter(Boolean)
    .sort((a, b) => {
      return a.created > b.created ? 1 : -1
    })
}

const groupByCategory = (sourceIcons) => {
  const cache = {}
  const categories = []
  sourceIcons.forEach((item) => {
    cache[item.category] = cache[item.category] || []
    cache[item.category].push(item)
  })
  Object.entries(cache).forEach(([category, icons]) => {
    const categoryName =
      category.charAt(0).toUpperCase() + category.slice(1)
    categories.push([categoryName, icons])
  })
  return categories
}

const grabCategory = (name) => {
  return String(name).split(/\//)[0]
}

export default class ListAllIcons extends React.PureComponent {
  state = { iconsToRender: [] }
  static propTypes = {
    groupBy: PropTypes.string,
    variant: PropTypes.string,
  }
  static defaultProps = {
    groupBy: null,
    variant: null,
  }
  constructor(props) {
    super(props)

    let icons = {}
    switch (props.variant) {
      case 'primary':
        icons = PrimaryIcons
        break

      case 'secondary':
        icons = SecondaryIcons
        break

      default:
        icons = { ...PrimaryIcons, ...SecondaryIcons }
        break
    }

    this.state.iconsToRender = getListOfIcons(icons)
  }
  renderListItem(icons) {
    return icons.map(({ iconName, Svg, variant, tags }) => {
      const SvgMedium = (
        variant === 'primary' ? PrimaryIconsMedium : SecondaryIconsMedium
      )[`${iconName}_medium`]

      // remove duplications
      tags = tags.filter((item, index) => {
        if (item === iconName) {
          return false
        }
        return tags.indexOf(item) === index
      })

      return (
        <li key={iconName} className={listItemStyle}>
          <div className={listItemInnerStyle}>
            <figure aria-labelledby={`icon-${iconName}`} aria-hidden>
              {(SvgMedium && <Icon icon={SvgMedium} size="medium" />) || (
                <Icon icon={Svg} />
              )}
            </figure>

            <AutoLinkHeader
              level={3}
              size="medium"
              element="figcaption"
              useSlug={iconName}
            >
              <Copy>{iconName}</Copy>
            </AutoLinkHeader>

            <P>{tags.length > 0 ? tags.join(', ') : '(no tags)'}</P>
          </div>
        </li>
      )
    })
  }

  render() {
    if (this.state.iconsToRender.length === 0) {
      return <></>
    }

    if (this.props.groupBy === 'category') {
      return groupByCategory(this.state.iconsToRender).map(
        ([categoryName, icons]) => (
          <React.Fragment key={categoryName}>
            <AutoLinkHeader level={2} size="large" useSlug={categoryName}>
              {categoryName}
            </AutoLinkHeader>
            <ul className={listStyle}>{this.renderListItem(icons)}</ul>
          </React.Fragment>
        ),
      )
    } else {
      return (
        <ul className={listStyle}>
          {this.renderListItem(this.state.iconsToRender)}
        </ul>
      )
    }
  }
}
