// eslint-disable-next-line
/* global trackScroll handleScroll setHeaders */
import _ from 'lodash'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import throttle from 'lodash/throttle'
import PlanningGuidelines from '../components/PlanningGuidelines'
import '../styles/planning-guide.css'

class PlanningGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerPositions: [],
      scrollY: 0,
      activeSection: 0
    }
    this.handleScroll = throttle(this.handleScroll, 200)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  setHeaders = headerPositions => {
    this.setState({ headerPositions: headerPositions })
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY }, () => {
      _.each(this.state.headerPositions, (position, key) => {
        if (this.state.scrollY > position - 1) {
          this.setState({ activeSection: key })
        }
      })
    })
  }

  handleNext = () => {
    const { stepIndex } = this.state
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>Planning Guide | Resource Center</title>
        </Helmet>
        <PlanningGuidelines
          setHeaders={this.setHeaders}
          activeSection={this.state.activeSection}
        />
      </div>
    )
  }
}

export default PlanningGuide
