import json
import pytest
from rubric_app import (
    load_json,
    order_by_year,
    get_top_3_ratings,
    get_lowest_3_ratings
)
from unittest.mock import mock_open, patch
from io import StringIO


@pytest.fixture
def musics_fixture():
    return [
        {
            "name": "Come Join The Murder",
            "artist": "The White Buffalo",
            "album": "Come Join The Murder",
            "release_year": 2014,
            "ratings": 9.1,
            "plays_count": 48859636
        }, 
        {
            "name": "Remember the Name",
            "artist": "Fort Minor",
            "album": "The Rising Tied",
            "release_year": 2005,
            "ratings": 8.4,
            "plays_count": 528277493
        }, 
        {
            "name": "FAIRY METAL",
            "artist": "Banshee",
            "album": "FAIRY METAL",
            "release_year": 2022,
            "ratings": 7.5,
            "plays_count": 137303
        }, 
        {
            "name": "Pink Rover",
            "artist": "Scene Queen",
            "album": "Pink Rover",
            "release_year": 2022,
            "ratings": 7.6,
            "plays_count": 2119863
        },
        {
            "name": "A Terceira Lâmina",
            "artist": "Zé Ramalho",
            "album": "Antologia Acústica",
            "release_year": 1997,
            "ratings": 8.5,
            "plays_count": 3090302
        }, 
        {
            "name": "Six Days",
            "artist": "DJ Shadow",
            "album": "The Fast And The Furious: Tokyo Drift",
            "release_year": 2006,
            "ratings": 7.6,
            "plays_count": 209681867
        }
    ]


def test_load_json(musics_fixture):
    with pytest.raises(ValueError):
        load_json('tests/files/musics.txt')

    with pytest.raises(FileNotFoundError):
        load_json('tests/files/musics.json')

    fake_file = json.dumps(musics_fixture)

    with patch("builtins.open", mock_open(read_data=fake_file)):
        assert load_json('tests/files/musics.json') == musics_fixture


def test_order_by_year(musics_fixture):
    data = [musics_fixture[i] for i in range(4)]

    expected = [
        musics_fixture[1],
        musics_fixture[0],
        musics_fixture[2],
        musics_fixture[3],
    ]

    expected_reverse = [
        musics_fixture[2],
        musics_fixture[3],
        musics_fixture[0],
        musics_fixture[1],
    ]

    order_by_year(data)
    assert data == expected

    order_by_year(data, True)
    assert data == expected_reverse


def test_high_ratings(musics_fixture):
    expected = [
        musics_fixture[0],
        musics_fixture[4],
        musics_fixture[1]
    ]

    data = [*musics_fixture]
    data = get_top_3_ratings(data)

    assert data == expected


def test_lowers_ratings(musics_fixture):
    expected = [
        musics_fixture[2],
        musics_fixture[3],
        musics_fixture[5]
    ]

    data = [*musics_fixture]
    data = get_lowest_3_ratings(data)

    assert data == expected