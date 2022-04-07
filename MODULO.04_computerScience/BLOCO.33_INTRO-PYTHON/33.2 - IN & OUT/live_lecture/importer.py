import json


def import_games(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)
    except json.JSONDecodeError:
        print("Problema no arquivo")
    except FileNotFoundError:
        print("arquivo num foi encontrado")


if __name__ == "__main__":
    games = import_games("video_games.json")
    print(len(games))
