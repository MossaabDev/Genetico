// Prevents additional console window on Windows in release, DO NOT REMOVE!!
extern crate rand;
use rand::Rng;
use std::io;

#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


#[tauri::command]
fn create_pop_matrix(height: i32, width: i32) -> Vec<Vec<i32>> {
    let POP_LENGTH: usize = height as usize;
    let GENE_LENGTH: usize = width as usize;
    print!("{}", POP_LENGTH);
    let mut pop: Vec<Vec<i32>>= vec![vec![0; GENE_LENGTH]; POP_LENGTH];
    // Populate the pop with vectors of random elements
    pop[0][0] = 1;
    pop[0][1] = 1;
    pop[0][2] = 1;
    pop[0][3] = 1;
    pop[0][4] = 1;
    pop[0][5] = 1;
    pop[0][6] = 1;
    pop[0][7] = 1;
    for i in 1..POP_LENGTH{
        for j in 0..pop[i].len() {
            pop[i][j] = rand::thread_rng().gen_range(0..2);
        }
    }
    

    for i in 0..POP_LENGTH{
        for j in 0..pop[i].len() {
            print!("{} ", pop[i][j]);
        }
        println!("\n")
    }

    pop
    
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, create_pop_matrix])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

}
