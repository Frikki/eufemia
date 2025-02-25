/**
 * UI lib Component Example
 *
 */

import React from 'react'
import ComponentBox from '../../../../shared/tags/ComponentBox'
import {
  add_medium as AddIcon,
  subtract_medium as SubtractIcon,
} from '@dnb/eufemia/src/icons'
import { Accordion, P, IconPrimary } from '@dnb/eufemia/src'

export const AccordionDefaultExample = () => (
  <ComponentBox data-visual-test="accordion-default">
    <Accordion
      expanded
      remember_state
      id="single-accordion"
      title="Accordion title"
    >
      <P>Accordion content</P>
    </Accordion>
    <Accordion.Provider
      top
      remember_state
      icon="chevron_down"
      icon_position="right"
    >
      <Accordion id="single-provider-accordion" title="Accordion title">
        <P>Accordion content</P>
      </Accordion>
    </Accordion.Provider>
  </ComponentBox>
)

export const AccordionLargeContentExample = () => (
  <ComponentBox data-visual-test="accordion-large" hideCode>
    <Accordion
      expanded
      bottom="large"
      title="Large content with long titleScelerisque eget cubilia tempus ipsum aenean dolor suscipit egestas potenti at eleifend platea interdum magnis amet molestie sem faucibus netus "
    >
      <P>
        Hendrerit dictum elit facilisis aliquet eleifend potenti leo nec
        praesent sollicitudin elementum scelerisque ridiculus neque nisi
        risus et habitant torquent nam pellentesque dictumst porttitor
        accumsan a nibh fringilla facilisi lacus sagittis mauris libero
        tellus justo ultricies tempor viverra sodales vestibulum proin
        tempus lorem cubilia at velit sociis sit malesuada class
        consectetur turpis metus vulputate tortor cum nisl ornare ligula
        platea quam gravida sapien penatibus ad curae varius hac ultrices
        ipsum felis vehicula fermentum rutrum parturient congue sed vel
        magnis laoreet donec id consequat augue mi semper volutpat urna in
        condimentum luctus cursus fames dignissim magna suspendisse
        bibendum mus natoque diam
      </P>
    </Accordion>
  </ComponentBox>
)

export const AccordionCustomisationExample = () => (
  <ComponentBox data-visual-test="accordion-custom">
    <Accordion
      group="unique-id"
      left_component={<IconPrimary icon="bell" />}
    >
      <Accordion.Header>Accordion title</Accordion.Header>
      <Accordion.Content>
        <P>
          Sociis sapien sociosqu vel sollicitudin accumsan laoreet gravida
          himenaeos nostra mollis volutpat bibendum convallis cum
          condimentum dictumst blandit rutrum vehicula
        </P>
      </Accordion.Content>
    </Accordion>
    <Accordion top expanded={true} group="unique-id">
      <Accordion.Header>Accordion title</Accordion.Header>
      <Accordion.Content>
        <P>
          Nec sit mattis natoque interdum sagittis cubilia nibh nullam
          etiam
        </P>
      </Accordion.Content>
    </Accordion>
  </ComponentBox>
)

export const AccordionGroupExample = () => (
  <ComponentBox data-visual-test="accordion-group">
    <Accordion.Group expanded allow_close_all>
      <Accordion expanded={false}>
        <Accordion.Header>Accordion title</Accordion.Header>
        <Accordion.Content top="x-large">
          <P>
            Sociis sapien sociosqu vel sollicitudin accumsan laoreet
            gravida himenaeos nostra mollis volutpat bibendum convallis cum
            condimentum dictumst blandit rutrum vehicula
          </P>
        </Accordion.Content>
      </Accordion>
      <Accordion top>
        <Accordion.Header>Accordion title</Accordion.Header>
        <Accordion.Content>
          <P>
            Nec sit mattis natoque interdum sagittis cubilia nibh nullam
            etiam
          </P>
        </Accordion.Content>
      </Accordion>
    </Accordion.Group>
  </ComponentBox>
)

export const AccordionPlainVariant = () => {
  return (
    <ComponentBox
      data-visual-test="accordion-variant-plain"
      scope={{ AddIcon, SubtractIcon }}
    >
      <Accordion
        variant="plain"
        title="Accordion with plain variant"
        icon={{
          closed: AddIcon,
          expanded: SubtractIcon,
        }}
        icon_position="right"
      >
        <P>content</P>
      </Accordion>
      <Accordion
        variant="plain"
        title="Accordion with plain variant"
        icon={{
          closed: AddIcon,
          expanded: SubtractIcon,
        }}
        icon_position="right"
        expanded
      >
        <P>content</P>
      </Accordion>
    </ComponentBox>
  )
}

export const AccordionNestedExample = () => {
  return (
    <ComponentBox data-visual-test="accordion-nested">
      <Accordion id="nested-accordion" title="Accordion" expanded space>
        <P space={0}>Content A</P>
        <Accordion
          id="nested-accordion-1"
          title="Accordion nested 1"
          space
        >
          <P space={0}>I'm nested 1</P>
        </Accordion>

        <P space={0}>Content B</P>
        <Accordion
          id="nested-accordion-2"
          title="Accordion nested 2"
          space
        >
          <P space={0}>I'm nested 2</P>
        </Accordion>
      </Accordion>
    </ComponentBox>
  )
}

export const AccordionDisabledExample = () => (
  <ComponentBox data-visual-test="accordion-disabled">
    <Accordion
      expanded
      disabled
      remember_state
      title="Disabled (expanded)"
    >
      <P>I am expanded, but disabled, so I can't be closed</P>
    </Accordion>
    <Accordion.Provider
      top
      disabled
      remember_state
      icon="chevron_down"
      icon_position="right"
    >
      <Accordion title="Disabled (closed)">
        <P>You can't see this text because I am disabled and closed.</P>
      </Accordion>
    </Accordion.Provider>
  </ComponentBox>
)
