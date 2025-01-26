using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TableTamer.Migrations
{
    /// <inheritdoc />
    public partial class Finished : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Table_Users_userId",
                table: "Table");

            migrationBuilder.AlterColumn<int>(
                name: "userId",
                table: "Table",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Table_Users_userId",
                table: "Table",
                column: "userId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Table_Users_userId",
                table: "Table");

            migrationBuilder.AlterColumn<int>(
                name: "userId",
                table: "Table",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Table_Users_userId",
                table: "Table",
                column: "userId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
