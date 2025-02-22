import os


def read_file(*path_components, full_path: str = None) -> str:
    """
       Reads and returns the content of a file.

       Parameters:
           *path_components (str): Parts of the file path to be joined (if 'full_path' is not provided).
           full_path (str, optional): The complete file path. If provided, it takes precedence over 'path_components'.

       Returns:
           str: The content of the file as a string.

       Behavior:
           - If 'full_path' is provided, the function reads the file from this exact location.
           - If 'full_path' is not provided, the function constructs the file path using 'path_components'.
           - The file is opened in read mode with UTF-8 encoding.

       Example:
           read_file("folder", "subfolder", "file.txt")
           -> Reads content from "folder/subfolder/file.txt".

           read_file(full_path="/absolute/path/to/file.txt")
           -> Reads content from "/absolute/path/to/file.txt".
       """
    if full_path is not None:
        with open(full_path, mode="r", encoding="utf-8") as file:
            content = file.read()
        return content

    with open(os.path.join(*path_components), mode="r", encoding="utf-8") as file:
        content = file.read()
    return content


def build_instructions(instructions_dir) -> str:
    """
        Constructs a complete instruction set by reading and combining all instruction files in a directory.

        Parameters:
            instructions_dir (str): The directory containing instruction files.

        Returns:
            str: The combined instructions as a single string.

        Behavior:
            - Retrieves all instruction file names from the specified directory.
            - Sorts the files numerically based on the prefix before the underscore.
            - Reads and concatenates the content of each file with spacing in between.
    """
    instructions_file_names = os.listdir(instructions_dir)
    sorted_instructions_file_names = sorted(instructions_file_names,
                                            key=lambda file_name: int(file_name.split("_")[0]))
    instructions = ""
    for instruction_file_name in sorted_instructions_file_names:
        instructions += read_file(instructions_dir, instruction_file_name)
        instructions += "\n\n"
    return instructions
