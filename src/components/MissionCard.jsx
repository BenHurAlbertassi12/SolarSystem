import React from 'react';
import PropTypes from 'prop-types';
import missions from '../data/missions';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
        {missions.map(() => (
          <MissionCard
            key={ name.name }
            nome={ name.name }
            idade={ year.year }
            local={ country.country }
            destino={ destination.destination }
          />
        ))}
      </div>

    );
  }
}
MissionCard.propTypes = {

  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
export default MissionCard;
