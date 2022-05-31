def matrix_reshape(matrix, rows, cols):
    is_impossible_reshape = (
        not matrix or
        rows * cols != len(matrix) * len(matrix[0]) #len([[1,2], [3,4]])
    )
    if is_impossible_reshape:
        return matrix
    new_matrix = [[]]
    row_index = 0
    column_index = 0
    for row in matrix:
        for column in row:
            if column_index >= cols:
                new_matrix.append([])
                row_index += 1
                column_index = 0
            new_matrix[row_index].append(column)
            column_index += 1
    return new_matrix



if __name__ == '__main__':
    test1 = [
        [1, 2, 3],
        [3, 4, 5]
    ]
    rows_1 = 3
    columns_1 = 2
    # [[1, 2], [3,3], [4,5]]
    print(matrix_reshape(test1, rows_1, columns_1))

    test2 = [
        [1, 2],
        [3, 4]
    ]
    rows_2 = 2
    columns_2 = 4

    print(matrix_reshape(test2, rows_2, columns_2))

    test3 = []
    rows_3 = 2
    columns_3 = 2

    print(matrix_reshape(test3, rows_3, columns_3))
